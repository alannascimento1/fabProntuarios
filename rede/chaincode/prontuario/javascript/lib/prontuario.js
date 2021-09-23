'use strict';

const { Contract } = require('fabric-contract-api');

class FabProntuario extends Contract { 

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const prontuarios = [
            {
		CPF: '1',
                name: 'Alan1',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
            {
		CPF: '2',
                name: 'Alan2',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
            {
		CPF: '3',
                name: 'Alan3',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
            {
		CPF: '4',
                name: 'Alan4',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
            {
		CPF: '5',
                name: 'Alan5',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
            {
		CPF: '6',
                name: 'Alan6',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
            {
		CPF: '7',
                name: 'Alan7',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
            {
		CPF: '8',
                name: 'Alan8',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
            {
		CPF: '9',
                name: 'Alan9',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
            {
		CPF: '10',
                name: 'Alan10',
		date: '15/05/1999',
                age : '21',
                information: 'Nenhuma informação',
            },
        ];

        for (let i = 0; i < prontuarios.length; i++) {
            prontuarios[i].docType = 'prontuario';
            await ctx.stub.putState('PRONTUARIO' + i, Buffer.from(JSON.stringify(prontuarios[i])));
            console.info('Added <--> ', prontuarios[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryprontuario(ctx, prontuarioNumber) {
        const prontuarioAsBytes = await ctx.stub.getState(prontuarioNumber); // get the prontuario from chaincode state
        if (!prontuarioAsBytes || prontuarioAsBytes.length === 0) {
            throw new Error(`${prontuarioNumber} does not exist`);
        }

        console.log(prontuarioAsBytes.toString());
	
        return prontuarioAsBytes.toString();
    }

    async createProntuario(ctx, prontuarioNumber, CPF, name, date,age, information) {
        console.info('============= START : Create prontuario ===========');

        const prontuario = {
	    CPF,
            name,
            docType: 'prontuario',
            age,
  	    date,
            information,
        };

        await ctx.stub.putState(prontuarioNumber, Buffer.from(JSON.stringify(prontuario)));
        console.info('============= END : Create prontuario ===========');
    }

    async queryAllProntuarios(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
	var d = new Date();
        console.info(allResults+ ' - '+d.getDate().toString+'/'+ d.getMonth() +'/'+d.getFullYear());
        return JSON.stringify(allResults);
    }

    async queryFromCPFProntuarios(ctx, cpf) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);

            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
	var d = new Date();
        console.info(allResults+ ' - '+d.getDate().toString+'/'+ d.getMonth() +'/'+d.getFullYear());
        return JSON.stringify(allResults);
    }


    async getHistoryProntuarios(ctx, prontuarioNumber) {
	const promiseOfIterator = ctx.stub.getHistoryForKey(prontuarioNumber);

	const results = [];
	for await (const keyMod of promiseOfIterator) {
	    const resp = {
		timestamp: keyMod.timestamp,
		txid: keyMod.tx_id
	    }
	    if (keyMod.is_delete) {
		resp.data = 'KEY DELETED';
	    } else {
		resp.data = keyMod.value.toString('utf8');
	    }
	    results.push(resp);
	}
	// results array contains the key history
	return JSON.stringify(results);

    }

}

module.exports = FabProntuario;
