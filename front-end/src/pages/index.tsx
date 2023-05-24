//COMPONENTS
import { Container } from "@/ui/component/container/Container";
import { Navigation } from "@/ui/component/navigation/Navigation";
import { Seo } from "@/ui/component/seo/Seo";

//DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/Avatar";
import { Button } from "@/ui/design-system/button/Button";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Spinner } from "@/ui/design-system/spinner/Spinner";
import { Typography } from "@/ui/design-system/typography/Typography";

//ICO
import { RiShieldUserLine, RiNotification2Fill } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Coders Monkeys" description="description" />
      {/* <Layout> */}
      <Navigation />
      {/* </Layout> */}
    </>
  );
}
