import { Container } from "@/ui/component/container/Container";

import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";

interface Props {
  // children: React.ReactNode;
}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="">
        <div>
          <Logo size="small" />
          <div className="">
            <div className="text-gray font-extrabold text-[24px]">
              Coders Monkeys
            </div>
            <Typography variant="caption4" component="span" theme="gray">
              Trouve l'inspiration & reçois des feedbacks !
            </Typography>
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  );
};
