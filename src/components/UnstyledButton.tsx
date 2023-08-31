import React from "react";
import type { PropsWithChildren } from "react";
import { SIZES } from "../data/constant";
import styled from "styled-components";

const UnstyledButton = ({
  variant,
  size,
  children,
}: PropsWithChildren<{
  variant: "filled" | "white";
  size: keyof typeof SIZES;
}>) => {
  const styles = SIZES[size];
  let Component;
  if (variant === "filled") {
    Component = FilledButton;
  }
  if (variant === "white") {
    Component = WhiteButton;
  }
  return <Component style={styles}>{children}</Component>;
};

const ButtonBase = styled.button`
  font-size: var(--fs);
  padding-inline: var(--px);
  padding-block: var(--py);
  border-radius: var(--rounded);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
`;

const FilledButton = styled(ButtonBase)`
  background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
  box-shadow: 0px 20px 24px 3px rgba(251, 161, 40, 0.42);
  color: white;

  &:hover {
    background: white;
    border-color: var(--orange);
    color: var(--orange);
  }
`;

const WhiteButton = styled(ButtonBase)`
  background: white;
  color: var(--orange);
  border-color: var(--orange);

  &:hover {
    background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
    color: white;
  }
`;

export default UnstyledButton;
