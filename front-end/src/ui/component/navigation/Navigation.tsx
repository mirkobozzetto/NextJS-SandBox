import { Container } from "@/ui/component/container/Container";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import { Button } from "@/ui/design-system/button/Button";

import { ActiveLink } from "@/ui/component/navigation/Active-link";
// import Link from "next/link";

interface Props {
  // children: React.ReactNode;
}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5">
      <ActiveLink href="/">
        <div className="flex items-center gap-2.5">
          <Logo size="small" />
          <div className="flex flex-col">
            <div className="text-gray font-extrabold text-[24px]">
              Coders Monkeys
            </div>
            <Typography variant="caption4" component="span" theme="gray">
              Trouve l'inspiration & reçois des feedbacks !
            </Typography>
          </div>
        </div>
        </ActiveLink>
        <div className="flex items-center gap-7">
          <Typography variant="caption3" component="div" className="">
            <ActiveLink href="/design-system">Design System</ActiveLink>
          </Typography>
          <Typography variant="caption3" component="div" className="">
            <ActiveLink href="/projets">Projets</ActiveLink>
          </Typography>
          <Typography variant="caption3" component="div" className="">
            <ActiveLink href="/formations">Formations</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Button>Connexion</Button>
            <Button variant="secondary">Rejoindre</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
