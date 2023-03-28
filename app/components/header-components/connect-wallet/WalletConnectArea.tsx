import ConnectWallet from "./connect-wallet";
import NetworksDropdown from "./networksDropdown";
import { hooks as Web3Hooks } from "~/connectors/meta-mask";

export const WalletConnectArea = () => {
  const { useAccounts, useIsActive } = Web3Hooks;
  const accounts = useAccounts();
  const isActive = useIsActive();

  return (
    <>
      <NetworksDropdown />
      <ConnectWallet />
    </>
  );
};
