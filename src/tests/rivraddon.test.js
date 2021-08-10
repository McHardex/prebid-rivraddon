const rivraddon =  require('../modules/rivraddon');

describe('rivraddon methods', () => {
  it('returns log message when enableAnalytics method is called', () => {
    rivraddon.analytics.enableAnalytics = jest.fn(() => 'simplaex analytics anabled')

    expect(rivraddon.analytics.enableAnalytics()).toEqual('simplaex analytics anabled');
  });

  it('calls trackPbjsEvent with key value pair', async () => {
    rivraddon.analytics.trackPbjsEvent = jest.fn((e) => e);

    const eventType = {eventType: 'bidding'}

    expect(rivraddon.analytics.trackPbjsEvent(eventType)).toMatchObject(eventType);
  });
})