import styled, { css } from "styled-components";

type IconProps = {
  color?: string;
  hasOutline?: boolean;
  size?: "small" | "large";
};

const Wrapper = styled.div<IconProps>`
  ${({ color, size }) => css`
    size: ${size === "small"
      ? `scale: 0.6;`
      : size === "large"
      ? `scale: 1.5;`
      : "width: 100%;"};
    color: #f5f5f7;
    transition: color 0.5s;

    &:hover {
      color: ${color};
    }
  `}
`;

export const Mail = ({ color = "#F5F5F7", hasOutline, size }: IconProps) => (
  <Wrapper color={color} size={size}>
    {hasOutline ? (
      <svg
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="27" cy="27" r="26" stroke="currentColor" stroke-width="2" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.3485 28.7444L27.0207 31.2552L30.5615 28.8131L38.4968 36.6427C38.2877 36.71 38.0647 36.7463 37.8333 36.7463H16.2039C15.9183 36.7463 15.6456 36.691 15.396 36.5904L23.3485 28.7444ZM39.9962 22.3101V34.5834C39.9962 34.9034 39.9267 35.2072 39.802 35.4805L32.0228 27.8061L39.9962 22.3101ZM14.041 22.3789L21.8821 27.7412L14.1782 35.3431C14.0895 35.1067 14.041 34.8507 14.041 34.5834V22.3789ZM37.8333 17.28C39.0278 17.28 39.9962 18.2483 39.9962 19.4429V20.2038L27.0165 29.1514L14.041 20.2778V19.4429C14.041 18.2483 15.0094 17.28 16.2039 17.28H37.8333Z"
          fill="currentColor"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.56883 13.9832L11.9495 16.2948L15.2093 14.0466L22.5149 21.2547C22.3224 21.3167 22.1171 21.3501 21.904 21.3501H1.99127C1.7283 21.3501 1.47723 21.2992 1.24741 21.2066L8.56883 13.9832ZM23.8952 8.05961V19.3589C23.8952 19.6535 23.8313 19.9332 23.7164 20.1848L16.5546 13.1194L23.8952 8.05961ZM0 8.12293L7.21875 13.0597L0.126287 20.0583C0.0446483 19.8407 0 19.605 0 19.3589L0 8.12293ZM21.904 3.42871C23.0037 3.42871 23.8952 4.32023 23.8952 5.41998V6.12051L11.9457 14.358L0 6.18861V5.41998C0 4.32023 0.891522 3.42871 1.99127 3.42871H21.904Z"
          fill="currentColor"
        />
      </svg>
    )}
  </Wrapper>
);
