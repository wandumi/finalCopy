// generateTabs.ts

import * as fs from 'fs';
import { Section } from './tabs/schema';

// Function to generate the liquid code for tabs section
function createTabsLiquid(section: Section, content: string, jsContent: string): string {
  // Build the liquid code using provided inputs
  const liquidCode = `
    {% schema %}
    {
      "name": "${section.name}",
      "settings": ${JSON.stringify(section.settings)}
    }
    {% endschema %}

    ${content}

    <script>
      ${jsContent}
    </script>
  `;

  return liquidCode;
}

// Read inputs from command line arguments
const [schemaFilePath, contentFilePath, jsFilePath] = process.argv.slice(2);

try {

  const schema: Section = require(schemaFilePath);

  const content = fs.readFileSync(contentFilePath, 'utf-8');


  const jsContent = fs.readFileSync(jsFilePath, 'utf-8');


  const tabsLiquid = createTabsLiquid(schema, content, jsContent);

  fs.writeFileSync('../theme/sections/tabs.liquid', tabsLiquid);

  console.log('tabs.liquid file generated successfully.');
} catch (error) {
  console.error('Error generating tabs.liquid:', error);
}
