import Image from "next/image";
import Link from "next/link";

import { BoxArrowUpRightIcon, MailIcon, PhoneIcon } from "@/components/icons";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui";

export const EmergencyContactCard = ({
  image,
  name,
  address,
  phone,
  email,
  website,
}) => {
  return (
    <Card className="flex flex-col justify-between gap-6 p-6 shadow-md">
      <div>
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="mb-3 h-12 w-12"
        />
        <CardTitle className="line-clamp-1 text-base md:text-lg">
          {name ?? "-"}
        </CardTitle>
        <CardContent className="p-0">
          {/* Address */}
          <p className="mb-4 mt-2 line-clamp-3 text-sm text-muted-foreground">
            {address ?? "-"}
          </p>
          {/* Phone */}
          <div className="mt-2 flex items-center">
            <PhoneIcon className="me-2 h-4 w-4 text-gray-500" />
            <p className="text-sm font-medium text-gray-500">{phone ?? "-"}</p>
          </div>
          {/* Email */}
          <div className="mt-2 flex items-center">
            <MailIcon className="me-2 h-4 w-4 text-gray-500" />
            {email ? (
              <Link
                href={`mailto:${email}`}
                className="text-sm font-medium text-gray-500"
              >
                {email ?? "-"}
              </Link>
            ) : (
              "-"
            )}
          </div>
        </CardContent>
      </div>

      <CardFooter className="w-full self-end p-0">
        <Button variant="outline_primary" className="w-full" asChild>
          <Link
            href={website}
            target="_blank"
            className="inline-flex items-center text-sm font-semibold text-primary"
          >
            Kunjungi Website
            <BoxArrowUpRightIcon className="ms-2 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
