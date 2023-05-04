import { Container } from "@/ui/component/container/Container";

import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";

interface Props {
  // children: React.ReactNode;
}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5">
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
        <div className="flex items-center gap-7">
          <Typography variant="caption3" component="div" className="">
            Projets
          </Typography>
          <Typography variant="caption3" component="div" className="">
            Projets
          </Typography>
          <Typography variant="caption3" component="div" className="">
            Projets
          </Typography>
        </div>
      </Container>
    </div>
  );
};
