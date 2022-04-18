import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <div className="px-32 py-6 text-center">
            <span className="align-middle items-center gap-x-4">
                <Link href={"/"}>
                    <a><Image src={"/f1omo.png"} width="400" height={100} objectFit="cover" objectPosition="" /></a>
                </Link>
            </span>
        </div>
    )
}