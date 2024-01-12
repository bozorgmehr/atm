import Billing from '../../helpers/billing/index.ee';

const getInvoices = async (_parent, _params, context) => {
  const subscription = await context.currentUser.$relatedQuery(
    'currentSubscription'
  );

  if (!subscription) {
    return;
  }

  const invoices = await Billing.paddleClient.getInvoices(
    Number(subscription.paddleSubscriptionId)
  );

  return invoices;
};

export default getInvoices;
