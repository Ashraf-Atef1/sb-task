import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import User from "@/assets/images/user.jpeg";
import Logo from "@/assets/images/Logo.svg";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import IconButton from "@/components/shared/icon-button/IconButton.component";
import SearchIcon from "@/components/shared/icons/Search.icon";

export default function DesktopHeader() {
	return (
		<main className="container mx-auto h-16 hidden lg:flex justify-between items-center">
			<div className="flex items-center gap-2">
				<Image src={Logo} alt="Logo" />
				<h3 className="text-lg">مرحبا بك في شركة SB </h3>
			</div>
			<div className="relative">
				<Input
					type="search"
					className="border-none bg-secondary pr-8"
					placeholder="ابحث هنا"
				/>
				<div className="absolute top-1 right-1">
					<IconButton>
						<SearchIcon size={14} />
					</IconButton>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<Avatar>
					<AvatarImage src={User.src} />
					<AvatarFallback>AA</AvatarFallback>
				</Avatar>
				<h2 className="font-bold text-lg">د/احمد ابراهيم</h2>
			</div>
		</main>
	);
}
