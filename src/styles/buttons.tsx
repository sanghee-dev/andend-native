import { spaces } from "./spaces";

// Button
export const ButtonSharedProps = `
  width: 90%;
  align-items: center;
  padding: ${spaces.paddingTopBottom};
  border-radius: 100px;
  opacity: ${(props: any) => (props.disabled ? 0.5 : 1)};
`;

// ButtonText
export const ButtonTextSharedProps = `
  font-weight: 400;
  font-size: 18px;
`;
