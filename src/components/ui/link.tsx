import type { Assign } from "@ark-ui/react";
import { type HTMLArkProps } from "@ark-ui/react/factory";
import NextLink from "next/link";
import { styled } from "styled-system/jsx";
import { link, type LinkVariantProps } from "styled-system/recipes";
import type { JsxStyleProps } from "styled-system/types";

export interface LinkProps
  extends Assign<JsxStyleProps, HTMLArkProps<"a">>,
    LinkVariantProps {}
export const Link = styled(NextLink, link);
