import Layout from "../components/layout"
import { CredentialType, IDKitWidget } from "@worldcoin/idkit";

export default function IndexPage() {

  async function onSuccess() {

  }
  async function handleVerify() {
    
  }

  console.log(`${process.env.WLD_CLIENT_ID}`);

  return (
    <Layout>
      <h1>Hello Human</h1>
      <IDKitWidget
        app_id="app_staging_6e443356b5f89f3ed31f7ce51a891829"
        action="vote_1" // this is your action name from the Developer Portal
        onSuccess={onSuccess} // callback when the modal is closed
        handleVerify={handleVerify} // optional callback when the proof is received
        credential_types={[CredentialType.Orb, CredentialType.Phone]} // optional, defaults to ['orb']
        enableTelemetry // optional, defaults to false
      >
        {({ open }) => <button onClick={open}>Verify with World ID</button>}
      </IDKitWidget>
    </Layout>
  )
}
