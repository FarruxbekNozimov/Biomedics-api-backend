const fs = require('fs');
const path = require('path');

function makeFiles(folderName: string, name: string, props: object) {
  // ALL FUNCTIONS
  let mkDir = path.resolve(__dirname, '..', folderName);
  let readFromExample = (name: string) => {
    return fs
      .readFileSync(path.resolve(__dirname, 'example', name), 'utf8')
      .toString();
  };
  let replaceName = (content: string) => {
    let splitContent = content.split('\n');
    for (let i in splitContent) {
      if (splitContent[i].includes('from')) {
        splitContent[i] = splitContent[i].replace(
          /example./g,
          folderName + '.',
        );
      }
    }
    content = splitContent.join('\n');
    content = content
      .replace(/@Controller('example')/, `@Controller('${name}')`)
      .replace(/example/g, name[0].toLowerCase() + name.slice(1, name.length))
      .replace(/Example/g, name);
    return content;
  };

  let writeProps = (content: string) => {
    let propsArea: string = '';
    for (let i in props) {
      propsArea += `@Prop(${props[i][1]})\n\t${i}:${props[i][0]};\n\n\t`;
    }

    return content.replace(/'props'/, propsArea);
  };

  let writeCreateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  let writeUpdateDto = (content: string) => {
    let str = '';
    for (let i in props) {
      str += `@ApiProperty({ example: "${props[i][2]}" })\n\t${i}?: ${
        props[i][0].length > 10 ? 'number' : props[i][0]
      };\n\n\t`;
    }
    return content.replace(/'dto'/, str);
  };

  // FUNTIONS END

  try {
    fs.mkdirSync(mkDir);
  } catch (error) {
    console.log('Folder is already created.');
  }
  let controller = readFromExample('example.controller.ts');
  let module = readFromExample('example.module.ts');
  let service = readFromExample('example.service.ts');
  let schema = readFromExample('schemas/example.schema.ts');
  let createDtoFile = readFromExample('dto/create-example.dto.ts');
  let updateDtoFile = readFromExample('dto/update-example.dto.ts');

  // CREATE CONTROLLER FILE
  try {
    fs.writeFileSync(
      mkDir + `/${folderName}.controller.ts`,
      replaceName(controller),
    );
    console.log('Controller created');
  } catch (error) {
    console.log('Controllerda Yozishda xatolik');
  }

  // CREATE SERVICE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.service.ts`, replaceName(service));
    console.log('Service created');
  } catch (error) {
    console.log('Service Yozishda xatolik');
  }

  // CREATE MODULE FILE
  try {
    fs.writeFileSync(mkDir + `/${folderName}.module.ts`, replaceName(module));
    console.log('Module created');
  } catch (error) {
    console.log('Module Yozishda xatolik');
  }

  // CREATE SCHEMA
  try {
    try {
      fs.mkdirSync(mkDir + '/schemas');
      console.log('Schema created');
    } catch (error) {
      console.log('Schema Papka oldin bor edi.');
    }
    fs.writeFileSync(
      mkDir + `/schemas/${folderName}.schema.ts`,
      writeProps(replaceName(schema)),
    );
    console.log('Schema created');
  } catch (error) {
    console.log('Schema Yozishda xatolik');
  }

  // CREATE DTO FOLDER
  try {
    fs.mkdirSync(mkDir + '/dto');
    console.log('Dto created');
  } catch (error) {
    console.log('Dto Papka oldin bor edi.');
  }

  // CREATE CREATEDTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/create-${folderName}.dto.ts`,
      writeCreateDto(replaceName(createDtoFile)),
    );
    console.log('CreateDto created');
  } catch (error) {
    console.log('CreateDto Yozishda xatolik');
  }

  // CREATE UPDATEDTO FILE
  try {
    fs.writeFileSync(
      mkDir + `/dto/update-${folderName}.dto.ts`,
      writeUpdateDto(replaceName(updateDtoFile)),
    );
    console.log('UpdateDto created');
  } catch (error) {
    console.log('UpdateDto Yozishda xatolik');
  }
}

// ADMIN
makeFiles('admin', 'Admin', {
  login: ['string', '', 'admin'],
  password: ['string', '', 'admin'],
  token: ['string', '', ''],
});

// WORKER
makeFiles('workers', 'Workers', {
  first_name: ['string', '', 'Toshmat'],
  last_name: ['string', '', 'Eshmatov'],
  image: ['string', '', 'Eshmatov'],
  birth: ['string', '', '2000'],
  gender: ['string', '', 'male'],
  address: ['string', '', 'Andijon'],
  job: ['string', '', 'Manager'],
  experience: ['string', '', '12+'],
  work_day: ['string', '', 'Du, Se, Chor'],
  start_work: ['string', '', '8:00'],
  end_work: ['string', '', '18:00'],
});

// DRUGS
makeFiles('drugs', 'Drugs', {
  name: ['string', '', 'Greenfer'],
  image: ['string', '', 'image.png'],
  instruction: ['string', '', ''],
});
