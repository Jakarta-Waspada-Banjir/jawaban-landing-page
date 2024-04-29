import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ExternalLinkIcon } from "./icons";
import { Button } from "./ui";

const EmergencyContactCard = ({ company, address, phoneNumber, link }) => {
  return (
    <div className="text-primary">
      <h3 className="mb-5 text-2xl font-bold">{company}</h3>
      <p className="text-justify">{address}</p>
      <p>{phoneNumber}</p>
      <Button asChild className="mt-2">
        <Link
          className="flex w-full justify-between font-bold"
          href={link}
          target="_blank"
        >
          {company}
          <ExternalLinkIcon className="h-6 w-6" />
        </Link>
      </Button>
    </div>
  );
};

export default EmergencyContactCard;
