import { animated, useSpring } from "@react-spring/web";

interface IFadeInProps {
  isVisible: boolean;
  children: React.ReactNode;
}

export default function FadeIn(props: IFadeInProps) {
  const styles = useSpring({
    opacity: props.isVisible ? 1 : 0,
    y: props.isVisible ? 0 : 24,
    config: { duration: 500 },
  });

  return <animated.div style={styles}>{props.children}</animated.div>;
}
