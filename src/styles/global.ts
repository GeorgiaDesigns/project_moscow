import { createGlobalStyle, css, DefaultTheme } from 'styled-components'
import * as SODataGrid from 'components/SimpleComponents/ODataGrid/styles'
import * as STextField from 'components/SimpleComponents/TextField/styles'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const customScroll = (theme: DefaultTheme) => css`
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.textSecondary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.textSecondary};
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.neutralLight};
    border-radius: 12px;
    box-shadow: inset 7px 10px 12px ${theme.colors.neutralMedium};
  }
`

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roobert';
        src: url('/fonts/Roobert/Roobert-Regular.woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roobert';
        src: url('/fonts/Roobert/Roobert-Medium.woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roobert';
        src: url('/fonts/Roobert/Roobert-RegularItalic.woff2');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roobert';
        src: url('/fonts/Roobert/Roobert-MediumItalic.woff2');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Rounded M Plus';
        src: url('/fonts/RoundedMPlus/RoundedMplus1c-Bold.woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Rounded M Plus';
        src: url('/fonts/RoundedMPlus/RoundedMplus1c-Regular.woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::before,
        &::after {
          box-sizing: inherit;
        }

        a {
          text-decoration: none;
        }
    }

    ${
      ['test-api', 'dev-api', 'localhost:5008'].some((host) =>
        API_URL?.includes(host)
      ) &&
      `
        #_hj_feedback_container {
          display: none;
        }
      `
    }


    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family.primary};
      }

      ${customScroll(theme)}

      :root {
        --toastify-font-family: ${theme.font.family.primary};
        --toastify-text-color-light: ${theme.colors.textPrimary};
      }

      .Toastify__toast-body {
        font-size: 1.4rem;
        white-space: pre-line;
      }

      ${STextField.Wrapper} + ${SODataGrid.Wrapper} {
        margin-top: ${theme.spacings.xxxs};
      }

      div[role='grid'] {
        overflow-x: hidden;

        * {
          user-select: text;
        }
      }

      svg {
        cursor: pointer;
      }
    `}
`

export default GlobalStyles
