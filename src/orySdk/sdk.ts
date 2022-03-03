import { V0alpha2Api, Configuration } from "@ory/client"
import { edgeConfig } from "@ory/integrations/next"

const ory = new V0alpha2Api(new Configuration(edgeConfig))

export default ory
