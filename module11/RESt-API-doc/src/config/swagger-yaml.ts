import path from "path";
import YAML from "yamljs";

const openApiYamlPath = path.resolve(process.cwd(), "docs/openapi.yaml");
const swaggerDocument = YAML.load(openApiYamlPath);

export default swaggerDocument;
