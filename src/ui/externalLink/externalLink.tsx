import type {ComponentProps} from "react";
import Link from "next/link";
import s from "./externalLink.module.scss";
import ExternalLinkIcon from "@/assets/icons/externalLink.icon";
import classNames from "classnames";

interface Props extends ComponentProps<typeof Link> {
	noIcon?: boolean
	blank?: boolean
	primary?: boolean
}

export function ExternalLink({noIcon = false, primary = false, blank = false, target = blank ? "_blank" : undefined, className, children, ...props}: Props) {
	return (
		<Link className={classNames(s.content, className)} target={target} {...props}>
			{children}
			{!noIcon && <ExternalLinkIcon/>}
		</Link>
	);
}