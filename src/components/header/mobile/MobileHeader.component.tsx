import Image from "next/image";
import Logo from "@/assets/images/Logo.svg";
import IconButton from "@/components/shared/icon-button/IconButton.component";
import { MenuIcon } from "lucide-react";

export default function MobileHeader() {
	return (
		<main className="container mx-auto h-12 lg:hidden flex justify-between items-center">
			<div className="flex items-center gap-2">
				<Image src={Logo} alt="Logo" />
				<h3 className="text-lg">مرحبا بك في شركة SB </h3>
			</div>
			<IconButton>
				<MenuIcon />
			</IconButton>
		</main>
	);
}
