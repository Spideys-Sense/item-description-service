const express = require('express');
const Sequelize = require('sequelize');

const path = require('path');

const app = express();
const PORT = 8080;

const { seed } = require('../database/seed.js');
const { Descriptions } = require('../database/Models/Descriptions.js');
const { ItemDataTables } = require('../database/Models/ItemDataTables.js');

// const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//knows to look for html with express.static:
//serves up static file:
app.use(express.static(path.join(__dirname, '../dist')));


app.get('/api/:id/information', (req, res) => {

  async() => {
    await seed();
  }

  let results = {};

  const descriptionFiller = () => {
    return Descriptions.findAll();
  }

  const itemDataTableFiller = () => {
    return ItemDataTables.findAll();
  }

  let findData = async () => {
    let description = descriptionFiller();
    let itemDataTable = itemDataTableFiller();

    let values = await Promise.all([description, itemDataTable])
    // console.log('VALUES IN SERVER: ', values[1].length)
    res.send(values);
  }
  findData()
    .catch((e) => {
      console.error('error in server: ', e);
    })
  // let temp = async() => {
  //   await descriptionFiller()
  //     .then((data) => {
  //       results['description'] = data;
  //     })
  //     await itemDataTableFiller()
  //       .then((data) => {
  //         results['itemDataTable'] = data;
  //       })
  // }
  // temp()
  //   .then(() => {
  //     res.send(results);
  //   })


  /*
  // let seedFunc;
  // let temp1 = async() => {
  //   await seed();
  // }
  // temp1()
  //   .then((data) => { console.log(data) })
  let results = {}

  seed();

  const descriptionFiller = () => {
    return Descriptions.findAll();
  };
  const itemDataTableFiller = () => {
    return ItemDataTables.findAll();
  };
  let temp = () => {
    return descriptionFiller()
      .then((data) => {
        // console.log(data);
        results['description'] = data;
        return results;
      })
      .then((results) => {
        itemDataTableFiller()
          .then((data) => {
            results['itemDataTable'] = data;
            return results;
          })
          .then((results) => {
            res.send(results)
          })
      })
        .catch((e) => {
        console.error('err in descriptionFiller: ', e);
      })
      // await itemDataTableFiller()
      // .then((data) => {
      //   results['itemDataTable'] = data;
      // })
  }
  temp();
  //   .then(() => {
  //     console.log(results.description)
  //     // console.log(results.itemDataTable)
  //     res.send(results);
  //   })
  */
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = server;