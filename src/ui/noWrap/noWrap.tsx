import s from "./noWrap.module.scss";
import type {ComponentProps} from "react";
import classNames from "classnames";

export function NoWrap({className, ...props}: ComponentProps<"span">) {
	return (
		<span className={classNames(s.content, className)} {...props}/>
	);
}