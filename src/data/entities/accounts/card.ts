import { Color, DerivationPath, Fingerprint, HashTag, IconProps, LockClosed, Sign } from "@/assets/svg";
import { TAtomicAccountState } from "@/domains/accounts/store/types/accounts";

export type TCardDetails = {
    icon: (props: IconProps) => React.JSX.Element,
    key: keyof TAtomicAccountState
};

export const cardDetailsContent: TCardDetails[] = [
    {
        icon: HashTag,
        key: "name",
    },{
        icon: DerivationPath,
        key: "descriptor",
    },{
        icon: Fingerprint,
        key: "fingerprint",
    },{
        icon: LockClosed,
        key: "balance",
    },{
        icon: Color,
        key: "colors",
    },

];