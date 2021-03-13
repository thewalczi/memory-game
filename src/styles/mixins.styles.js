import {css} from "styled-components";
import { color } from './global-variables.styles';

export const wrapper = css`
    display: flex;
    max-width: 800px;
    width: 100%;
    max-height: 900px;
    height: 100%;
    padding: 20px;
    margin: 0 auto;
`

export const tile = css`
    border-radius: 5px;
    box-shadow: 0 0px 5px ${color.darknavy};
`