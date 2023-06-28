import { Typography } from "@/ui/design-system/typography/Typography";
import { Container } from "../container/Container";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formations gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne toi à la chaîne
          </Typography>
          <a href="https://www.youtube.com/" target="_blank">
            <Image
              src="/assets/svg/YTB.svg"
              alt="logo youtube"
              width={229}
              height={216}
            />
          </a>
        </div>
        <div className="">Liste de liens</div>
      </Container>
      <Container>
        <hr className="text-gray-800" />
        <div className="flex justify-between">
          <Typography variant="caption4" theme="gray">
            © 2022 - Tous droits réservés
          </Typography>
          <div className=""></div>
        </div>
      </Container>
    </div>
  );
};
