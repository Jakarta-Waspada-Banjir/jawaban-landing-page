import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { FloodIcon } from "@/components/icons";
import { Card, CardContent, CardHeader } from "@/components/ui";
import { initialSluiceGates } from "@/data/FloodInformationMap";
import { formatDate } from "@/utils";

import { StatusBadge } from "../StatusBadge";

const markerSuiceGate = L.divIcon({
  html: `<svg width="25" height="37" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2008_1161)">
<circle cx="17.5" cy="15.5" r="9.5" fill="#50B748" />
<path d="M17 0.5C12.6239 0.5 8.42709 2.23839 5.33274 5.33274C2.23839 8.42709 0.5 12.6239 0.5 17C0.5 25.715 15.2 44.15 15.83 44.945C15.9706 45.1202 16.1487 45.2616 16.3512 45.3587C16.5537 45.4559 16.7754 45.5063 17 45.5063C17.2246 45.5063 17.4463 45.4559 17.6488 45.3587C17.8513 45.2616 18.0294 45.1202 18.17 44.945C18.8 44.15 33.5 25.715 33.5 17C33.5 12.6239 31.7616 8.42709 28.6673 5.33274C25.5729 2.23839 21.3761 0.5 17 0.5ZM17 24.5C15.22 24.5 13.4799 23.9722 11.9999 22.9832C10.5198 21.9943 9.36627 20.5887 8.68509 18.9442C8.0039 17.2996 7.82567 15.49 8.17293 13.7442C8.5202 11.9984 9.37737 10.3947 10.636 9.13604C11.8947 7.87737 13.4984 7.0202 15.2442 6.67293C16.99 6.32567 18.7996 6.5039 20.4442 7.18508C22.0887 7.86627 23.4943 9.01983 24.4832 10.4999C25.4722 11.9799 26 13.72 26 15.5C26 17.8869 25.0518 20.1761 23.364 21.864C21.6761 23.5518 19.3869 24.5 17 24.5Z" fill="#50B748" />
<path d="M17 0.5V6.5V11C17 11 17 12.6131 17 15C17 17.3869 17.0002 18.5 17.0002 21C16.9998 23 17 23 17 24.5V45.5C17.2253 45.499 17.4475 45.4472 17.65 45.3485C17.8526 45.2498 18.0303 45.1068 18.17 44.93C18.8 44.15 33.5 25.715 33.5 17C33.5 12.6239 31.7616 8.42709 28.6673 5.33274C25.5729 2.23839 21.3761 0.5 17 0.5Z" fill="#4AA243" />
<g clipPath="url(#clip1_2008_1161)">
<path d="M28.2813 9H25.0469C24.8563 9 24.6734 9.07573 24.5386 9.21052C24.4039 9.34531 24.3281 9.52813 24.3281 9.71875V10.7969H10.6719V9.71875C10.6719 9.52813 10.5961 9.34531 10.4614 9.21052C10.3266 9.07573 10.1437 9 9.95313 9H6.71875C6.52813 9 6.34531 9.07573 6.21052 9.21052C6.07573 9.34531 6 9.52813 6 9.71875V24.4531C6 24.6438 6.07573 24.8266 6.21052 24.9614C6.34531 25.0962 6.52813 25.1719 6.71875 25.1719H28.2813C28.4719 25.1719 28.6547 25.0962 28.7895 24.9614C28.9243 24.8266 29 24.6438 29 24.4531V9.71875C29 9.52813 28.9243 9.34531 28.7895 9.21052C28.6547 9.07573 28.4719 9 28.2813 9Z" fill="white" />
<path d="M28.2813 9H25.0469C24.8563 9 24.6734 9.07573 24.5386 9.21052C24.4039 9.34531 24.3281 9.52813 24.3281 9.71875V10.7969H10.6719V9.71875C10.6719 9.52813 10.5961 9.34531 10.4614 9.21052C10.3266 9.07573 10.1437 9 9.95313 9H6.71875C6.52813 9 6.34531 9.07573 6.21052 9.21052C6.07573 9.34531 6 9.52813 6 9.71875V24.4531C6 24.6438 6.07573 24.8266 6.21052 24.9614C6.34531 25.0962 6.52813 25.1719 6.71875 25.1719H28.2813C28.4719 25.1719 28.6547 25.0962 28.7895 24.9614C28.9243 24.8266 29 24.6438 29 24.4531V9.71875C29 9.52813 28.9243 9.34531 28.7895 9.21052C28.6547 9.07573 28.4719 9 28.2813 9ZM10.6719 12.2344H24.3281V19.0975C24.2097 19.0746 24.0894 19.0629 23.9688 19.0625C23.4396 19.0625 22.9773 19.2938 22.569 19.4978L22.5312 19.5167V15.8281C22.5312 15.2563 22.3041 14.7078 21.8997 14.3034C21.4953 13.8991 20.9469 13.6719 20.375 13.6719C19.8031 13.6719 19.2547 13.8991 18.8503 14.3034C18.4459 14.7078 18.2188 15.2563 18.2188 15.8281V19.5167C17.9519 19.6514 17.6797 19.7813 17.5 19.7813C17.3203 19.7813 17.0481 19.6501 16.7813 19.5167V15.8281C16.7813 15.2563 16.5541 14.7078 16.1497 14.3034C15.7453 13.8991 15.1969 13.6719 14.625 13.6719C14.0531 13.6719 13.5047 13.8991 13.1003 14.3034C12.6959 14.7078 12.4688 15.2563 12.4688 15.8281V19.5167L12.431 19.4978C12.0227 19.2938 11.5604 19.0625 11.0313 19.0625C10.9106 19.0629 10.7903 19.0746 10.6719 19.0975V12.2344ZM21.0938 15.8281V19.5167L21.056 19.4978C20.6477 19.2938 20.1854 19.0625 19.6563 19.0625V15.8281C19.6563 15.6375 19.732 15.4547 19.8668 15.3199C20.0016 15.1851 20.1844 15.1094 20.375 15.1094C20.5656 15.1094 20.7484 15.1851 20.8832 15.3199C21.018 15.4547 21.0938 15.6375 21.0938 15.8281ZM15.3438 15.8281V19.0625C14.8146 19.0625 14.3523 19.2938 13.944 19.4978L13.9063 19.5167V15.8281C13.9063 15.6375 13.982 15.4547 14.1168 15.3199C14.2516 15.1851 14.4344 15.1094 14.625 15.1094C14.8156 15.1094 14.9984 15.1851 15.1332 15.3199C15.268 15.4547 15.3438 15.6375 15.3438 15.8281ZM7.4375 10.4375H9.23438V19.6856C9.12144 19.7392 8.99963 19.7716 8.875 19.7813C8.68543 19.7813 8.39703 19.6371 8.11852 19.4978C7.89828 19.3821 7.6708 19.2809 7.4375 19.1946V10.4375ZM27.5625 23.7344H7.4375V20.7646L7.47523 20.7835C7.88357 20.9874 8.34582 21.2188 8.875 21.2188C9.40418 21.2188 9.86643 20.9874 10.2748 20.7835C10.5533 20.6442 10.8417 20.5 11.0313 20.5C11.2208 20.5 11.5092 20.6442 11.7877 20.7835C12.1961 20.9874 12.6583 21.2188 13.1875 21.2188C13.7167 21.2188 14.1789 20.9874 14.5873 20.7835C14.8658 20.6442 15.1542 20.5 15.3438 20.5C15.5333 20.5 15.8217 20.6442 16.1002 20.7835C16.5086 20.9874 16.9708 21.2188 17.5 21.2188C18.0292 21.2188 18.4914 20.9874 18.8998 20.7835C19.1783 20.6442 19.4667 20.5 19.6563 20.5C19.8458 20.5 20.1342 20.6442 20.4127 20.7835C20.8211 20.9874 21.2833 21.2188 21.8125 21.2188C22.3417 21.2188 22.8039 20.9874 23.2123 20.7835C23.4908 20.6442 23.7792 20.5 23.9688 20.5C24.1583 20.5 24.4467 20.6442 24.7252 20.7835C25.1336 20.9874 25.5958 21.2188 26.125 21.2188C26.6542 21.2188 27.1164 20.9874 27.5248 20.7835L27.5625 20.7646V23.7344ZM27.5625 19.1946C27.3292 19.2809 27.1017 19.3821 26.8815 19.4978C26.603 19.6371 26.3146 19.7813 26.125 19.7813C26.0004 19.7716 25.8786 19.7392 25.7656 19.6856V10.4375H27.5625V19.1946Z" fill="#50B748" />
</g>
</g>
<defs>
<clipPath id="clip0_2008_1161">
<rect width="25" height="37" fill="white" />
</clipPath>
<clipPath id="clip1_2008_1161">
<rect width="23" height="17" fill="white" transform="translate(6 8)" />
</clipPath>
</defs>
</svg>`,
  iconSize: [25, 32],
  className: "marker-icon",
});

export const SluiceGatesMarker = ({ activeSluiceGatesMarker }) => {
  return (
    <>
      {initialSluiceGates.map((sluiceGates) =>
        activeSluiceGatesMarker ? (
          <Marker
            key={sluiceGates.properties.id}
            position={[
              Number(sluiceGates.geometry.coordinates[1]),
              Number(sluiceGates.geometry.coordinates[0]),
            ]}
            icon={markerSuiceGate}
          >
            <Popup className="m-0">
              <Card>
                <CardHeader className="rounded-t-lg bg-[#50B748] p-0">
                  <h3 className="p-2 text-center text-sm font-semibold text-white">
                    Pintu Air {sluiceGates.properties.pintu_air.name ?? "-"}
                  </h3>
                </CardHeader>
                <CardContent className="p-2">
                  <div className="mb-1.5 flex items-center justify-between gap-x-3">
                    <h5 className="text-sm font-semibold text-gray-600">
                      {sluiceGates.properties.tanggal
                        ? formatDate(
                            `${sluiceGates.properties.tanggal}T${sluiceGates.properties.jam}`,
                            "dd MMMM yyy | HH:mm",
                          )
                        : "-"}
                    </h5>
                    {/* Status */}
                    {sluiceGates.properties.status_siaga ? (
                      <StatusBadge
                        status={sluiceGates.properties.status_siaga}
                      />
                    ) : (
                      "-"
                    )}
                  </div>
                  <h4 className="mb-1.5 text-sm font-semibold text-gray-400">
                    {sluiceGates.properties.cuaca.nama ?? "-"}
                  </h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <FloodIcon className="h-auto w-5 text-primary" />
                      <h5 className="ml-2 text-sm font-semibold text-gray-400">
                        {sluiceGates.properties.ketinggian !== null &&
                        sluiceGates.properties.ketinggian !== undefined
                          ? sluiceGates.properties.ketinggian + " cm"
                          : "-"}
                      </h5>
                    </div>
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
