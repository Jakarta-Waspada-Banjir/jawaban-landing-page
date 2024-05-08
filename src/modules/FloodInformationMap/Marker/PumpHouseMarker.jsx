import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { Card, CardContent, CardHeader } from "@/components/ui";
import { initialPumpHouse } from "@/data/FloodInformationMap";
import { formatDate } from "@/utils";

const markerPumpHouse = L.divIcon({
  html: `<svg width="25" height="37" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2008_1180)">
<circle cx="17.5" cy="15.5" r="9.5" fill="#2EA7E9" />
<path d="M17 0.5C12.6239 0.5 8.42709 2.23839 5.33274 5.33274C2.23839 8.42709 0.5 12.6239 0.5 17C0.5 25.715 15.2 44.15 15.83 44.945C15.9706 45.1202 16.1487 45.2616 16.3512 45.3587C16.5537 45.4559 16.7754 45.5063 17 45.5063C17.2246 45.5063 17.4463 45.4559 17.6488 45.3587C17.8513 45.2616 18.0294 45.1202 18.17 44.945C18.8 44.15 33.5 25.715 33.5 17C33.5 12.6239 31.7616 8.42709 28.6673 5.33274C25.5729 2.23839 21.3761 0.5 17 0.5ZM17 24.5C15.22 24.5 13.4799 23.9722 11.9999 22.9832C10.5198 21.9943 9.36627 20.5887 8.68509 18.9442C8.0039 17.2996 7.82567 15.49 8.17293 13.7442C8.5202 11.9984 9.37737 10.3947 10.636 9.13604C11.8947 7.87737 13.4984 7.0202 15.2442 6.67293C16.99 6.32567 18.7996 6.5039 20.4442 7.18508C22.0887 7.86627 23.4943 9.01983 24.4832 10.4999C25.4722 11.9799 26 13.72 26 15.5C26 17.8869 25.0518 20.1761 23.364 21.864C21.6761 23.5518 19.3869 24.5 17 24.5Z" fill="#2EA7E9" />
<path d="M17 0.5V6.5V11C17 11 17 12.6131 17 15C17 17.3869 17.0002 18.5 17.0002 21C16.9998 23 17 23 17 24.5V45.5C17.2253 45.499 17.4475 45.4472 17.65 45.3485C17.8526 45.2498 18.0303 45.1068 18.17 44.93C18.8 44.15 33.5 25.715 33.5 17C33.5 12.6239 31.7616 8.42709 28.6673 5.33274C25.5729 2.23839 21.3761 0.5 17 0.5Z" fill="#0680C3" />
<g clipPath="url(#clip1_2008_1180)">
<path d="M16.5001 17.5L20.2454 13.7548C20.9474 13.0527 21.3418 12.1005 21.3419 11.1077C21.3419 10.5484 21.2317 9.99452 21.0176 9.47777C20.8036 8.96103 20.4899 8.4915 20.0944 8.096C19.6989 7.70049 19.2293 7.38677 18.7126 7.17272C18.1958 6.95868 17.642 6.84851 17.0827 6.84851H16.8765C15.6873 6.84856 14.5279 7.22022 13.5603 7.91153L12.4179 8.7274C12.1831 8.89498 11.9917 9.11621 11.8597 9.37268C11.7276 9.62915 11.6588 9.91345 11.6589 10.2019C11.6589 10.5092 11.7372 10.8115 11.8862 11.0802C12.0352 11.349 12.2501 11.5754 12.5107 11.7383L13.5009 12.3564C14.1224 12.7447 14.6348 13.2847 14.99 13.9257C15.3453 14.5666 15.5316 15.2873 15.5316 16.0201L16.5001 17.5ZM16.5001 17.5L12.7549 21.2453C12.0529 21.9474 11.6585 22.8995 11.6584 23.8923C11.6584 25.022 12.1072 26.1053 12.9059 26.904C13.7047 27.7028 14.788 28.1515 15.9176 28.1515H16.1238C17.3129 28.1515 18.4724 27.7798 19.44 27.0885L20.5824 26.2726C20.8172 26.1051 21.0086 25.8838 21.1406 25.6274C21.2726 25.3709 21.3415 25.0866 21.3414 24.7981C21.3413 24.4908 21.2631 24.1886 21.1141 23.9198C20.9651 23.6511 20.7502 23.4246 20.4896 23.2617L19.4993 22.6437C18.8779 22.2553 18.3655 21.7153 18.0103 21.0744C17.655 20.4335 17.4686 19.7127 17.4687 18.98L16.5001 17.5ZM16.5001 17.5L20.2454 21.2453C20.9475 21.9472 21.8996 22.3416 22.8925 22.3417C23.4518 22.3417 24.0056 22.2316 24.5224 22.0175C25.0391 21.8035 25.5087 21.4897 25.9042 21.0942C26.2997 20.6987 26.6134 20.2292 26.8274 19.7125C27.0415 19.1957 27.1517 18.6419 27.1517 18.0825V17.8764C27.1516 16.6872 26.7799 15.5278 26.0886 14.5602L25.2728 13.4177C25.1052 13.1829 24.884 12.9916 24.6275 12.8595C24.371 12.7275 24.0867 12.6587 23.7983 12.6587C23.4909 12.6588 23.1887 12.737 22.9199 12.8861C22.6512 13.0351 22.4247 13.25 22.2619 13.5106L21.6438 14.5008C21.2554 15.1222 20.7154 15.6347 20.0745 15.9899C19.4336 16.3451 18.7129 16.5315 17.9801 16.5315L16.5001 17.5ZM16.5001 17.5L12.7549 13.7548C12.0528 13.0528 11.1006 12.6584 10.1078 12.6583C8.97821 12.6583 7.89487 13.107 7.09612 13.9058C6.29737 14.7045 5.84863 15.7879 5.84863 16.9175V17.1237C5.84868 18.3128 6.22034 19.4723 6.91165 20.4398L7.72752 21.5823C7.8951 21.8171 8.11633 22.0085 8.3728 22.1405C8.62928 22.2725 8.91357 22.3414 9.20203 22.3413C9.50934 22.3412 9.81158 22.263 10.0803 22.114C10.3491 21.965 10.5756 21.7501 10.7384 21.4895L11.3565 20.4992C11.7448 19.8778 12.2849 19.3654 12.9258 19.0101C13.5667 18.6549 14.2874 18.4685 15.0202 18.4685L16.5001 17.5Z" fill="white" />
<path d="M16.5 19.6787C17.7033 19.6787 18.6787 18.7033 18.6787 17.5C18.6787 16.2967 17.7033 15.3213 16.5 15.3213C15.2967 15.3213 14.3213 16.2967 14.3213 17.5C14.3213 18.7033 15.2967 19.6787 16.5 19.6787Z" fill="#0680C3" />
<path d="M16.4998 18.0984C16.8303 18.0984 17.0982 17.8305 17.0982 17.5C17.0982 17.1695 16.8303 16.9016 16.4998 16.9016C16.1693 16.9016 15.9014 17.1695 15.9014 17.5C15.9014 17.8305 16.1693 18.0984 16.4998 18.0984Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
</g>
</g>
<defs>
<clipPath id="clip0_2008_1180">
<rect width="25" height="37" fill="white" />
</clipPath>
<clipPath id="clip1_2008_1180">
<rect width="23" height="23" fill="white" transform="translate(5 6)" />
</clipPath>
</defs>
</svg>`,
  iconSize: [25, 32],
  className: "marker-icon",
});

export const PumpHouseMarker = ({ activePumpHouseMarker }) => {
  return (
    <>
      {initialPumpHouse.map((pumpHouse, index) =>
        activePumpHouseMarker ? (
          <Marker
            key={index}
            position={[
              Number(pumpHouse.geometry.coordinates[1]),
              Number(pumpHouse.geometry.coordinates[0]),
            ]}
            icon={markerPumpHouse}
          >
            <Popup className="m-0">
              <Card>
                <CardHeader className="rounded-t-lg bg-[#2EA7E9] p-0">
                  <h3 className="p-2 text-center text-sm font-semibold text-white">
                    Rumah pompa {pumpHouse.properties.pompa_air.nama ?? "-"}
                  </h3>
                </CardHeader>
                <CardContent className="p-2">
                  <h5 className="mb-1.5 text-sm font-semibold text-gray-600">
                    {`${
                      pumpHouse.properties.tanggal
                        ? formatDate(
                            pumpHouse.properties.tanggal,
                            "dd MMMM yyy",
                          )
                        : "-"
                    } | ${pumpHouse.properties.jam ?? "-"}
                      `}
                  </h5>

                  <div className="mb-1.5">
                    <h6 className="text-sm font-bold text-gray-700">
                      Kewenangan
                    </h6>
                    <h4 className="text-sm font-semibold text-gray-400">
                      {pumpHouse.properties.pompa_air.kewenangan ?? "-"}
                    </h4>
                  </div>

                  <div className="mb-1.5">
                    <h5 className="text-sm font-bold text-gray-700">
                      Cuaca {""}
                      <span className="font-semibold text-gray-400">
                        {pumpHouse.properties.cuaca.nama ?? "-"}
                      </span>
                    </h5>
                  </div>

                  <div className="mb-1.5">
                    <h5 className="text-sm font-bold text-gray-700">
                      Jumlah Pompa Operasi{" "}
                      <span className="font-semibold text-gray-400">
                        {pumpHouse.properties.jumlah_pompa_operasi !== null &&
                        pumpHouse.properties.jumlah_pompa_operasi !== undefined
                          ? pumpHouse.properties.jumlah_pompa_operasi
                          : "-"}
                      </span>
                    </h5>
                  </div>

                  <div className="mb-1.5">
                    <h5 className="text-sm font-bold text-gray-700">
                      Jumlah Pompa Siaga{" "}
                      <span className="font-semibold text-gray-400">
                        {pumpHouse.properties.jumlah_pompa_idle !== null &&
                        pumpHouse.properties.jumlah_pompa_idle !== undefined
                          ? pumpHouse.properties.jumlah_pompa_idle
                          : "-"}
                      </span>
                    </h5>
                  </div>
                </CardContent>
              </Card>
            </Popup>
          </Marker>
        ) : null,
      )}
    </>
  );
};
