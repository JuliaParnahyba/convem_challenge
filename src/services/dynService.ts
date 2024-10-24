import { dynamoClient } from '../aws/dynamoCliente';

export const saveTransaction = async (transaction: any) => {
  const params = {
    TableName: 'Transactions',
    Item: transaction
  };

  try {
    await dynamoClient.put(params).promise();
    console.log('Transaction saved:', transaction);
  } catch (error) {
    console.error('Error saving transaction:', error);
  }
};
