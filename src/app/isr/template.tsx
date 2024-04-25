import type React from "react";
import { Boundary } from "#/src/ui/boundary";

export default function Template({ children }: { children: React.ReactNode }) {
	return <Boundary>{children}</Boundary>;
}
