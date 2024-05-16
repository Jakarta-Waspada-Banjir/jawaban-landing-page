"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  FacebookColorIcon,
  GmailColorIcon,
  LinkIcon,
  ShareIcon,
  TwitterColorIcon,
  WhatsappColorIcon,
} from "@/components/icons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@/components/ui";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { BASE_URL } from "@/config";
import { cn } from "@/lib/utils";

export const ModalShareSocialMedia = ({ inMobileHidden = false, data }) => {
  const { toast } = useToast();
  const [isClicked, setIsClicked] = useState(false);
  const pathName = usePathname();
  const url = BASE_URL + pathName;

  const copyToClipboard = () => {
    if (!isClicked) {
      setIsClicked(true);
      navigator.clipboard
        .writeText(url)
        .then(() => {
          toast({
            variant: "success",
            description: "Link berhasil di salin.",
          });
          setTimeout(() => {
            setIsClicked(false);
          }, 2000);
        })
        .catch(() => {
          toast({
            variant: "destructive",
            description: "Gagal menyalin link.",
          });
          setIsClicked(false);
        });
    }
  };

  const whatsappShare = ({ title }) => {
    const message = title + "\n" + url;
    const textTemplate = encodeURIComponent(message);

    window.open(
      "https://api.whatsapp.com/send?text=" + textTemplate,
      "",
      "width=500,height=350,left=700,top=250",
    );
  };

  const twitterShare = ({ title }) => {
    const message = title + "\n" + url;
    const textTemplate = encodeURIComponent(message);

    window.open(
      "https://twitter.com/intent/tweet?text=" + textTemplate,
      "",
      "width=500,height=350,left=700,top=250",
    );
  };

  const emailShare = ({ title }) => {
    const message = title + "\n" + url;
    const textTemplate = encodeURIComponent(message);

    window.open("mailto:?subject=" + title + "&body=" + textTemplate, "");
  };

  const facebookShare = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + url,
      "",
      "width=500,height=350,left=700,top=250",
    );
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className={cn(
            `flex w-full gap-4 bg-transparent p-4 text-xs text-white hover:border-primary hover:bg-primary hover:text-white md:hidden xl:p-5 xl:text-base`,
            { "hidden w-min md:flex": inMobileHidden },
          )}
        >
          Bagikan Berita <ShareIcon className="h-4 w-4 xl:h-5 xl:w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-sm">
        <AlertDialogHeader className="overflow-hidden">
          <AlertDialogTitle className="mb-1 text-left text-base text-primary">
            Bagikan Berita
          </AlertDialogTitle>
          <Separator className="bg-gray-300" />
          <h4 className="line-clamp-3 pb-2 text-left text-sm font-bold text-gray-700">
            {data?.title ?? "-"}
          </h4>

          <div className="flex items-center justify-start gap-x-4 overflow-x-auto">
            <div>
              <button
                onClick={() => copyToClipboard()}
                disabled={isClicked}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-600/15 p-2 transition-colors duration-150 ease-in-out hover:bg-gray-600/20 md:h-12 md:w-12"
              >
                <LinkIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div>
              <button
                onClick={() => emailShare({ title: data.title ?? "-" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#ea4335]/15 p-2 transition-colors duration-150 ease-in-out hover:bg-[#ea4335]/20 md:h-12 md:w-12"
              >
                <GmailColorIcon className="h-5 w-5" />
              </button>
            </div>
            <div>
              <button
                onClick={() => facebookShare()}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#1877f2]/15 p-2 transition-colors duration-150 ease-in-out hover:bg-[#1877f2]/20 md:h-12 md:w-12"
              >
                <FacebookColorIcon className="h-5 w-5" />
              </button>
            </div>
            <div>
              <button
                onClick={() => twitterShare({ title: data.title ?? "-" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-gray-400/15 p-2 transition-colors duration-150 ease-in-out hover:bg-gray-400/20 md:h-12 md:w-12"
              >
                <TwitterColorIcon className="h-4 w-4" />
              </button>
            </div>
            <div>
              <button
                onClick={() => whatsappShare({ title: data.title ?? "-" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#60d669]/15 p-2 transition-colors duration-150 ease-in-out hover:bg-[#60d669]/20 md:h-12 md:w-12"
              >
                <WhatsappColorIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4 w-full">
          <AlertDialogCancel className="w-full" variant="default">
            Tutup
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
