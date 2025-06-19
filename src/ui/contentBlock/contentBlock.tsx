import s from "./contentBlock.module.scss";
import type {ComponentProps} from "react";
import classNames from "classnames";

export function ContentBlock({className, ...props}: ComponentProps<"div">) {
	return (
		<div className={classNames(s.content, className)} {...props}/>
	);
}