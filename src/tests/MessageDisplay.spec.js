import MessageDisplay from '@/components/MessageDisplay';
import { mount } from '@vue/test-utils';
import { getMessage } from '@/services/axios';
import flushPromises from 'flush-promises';

jest.mock('@/services/axios.js');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('MessageDisplay', () => {
    // Success:
    it('calls getMessage and displays the message', async () => {
        const mockMessage = 'Hello from the db';

        getMessage.mockResolvedValueOnce({ text: mockMessage });
        const wrapper = mount(MessageDisplay);

        await flushPromises();
        expect(getMessage).toHaveBeenCalledTimes(1);

        const message = wrapper.find('[data-testid="message"]').text();
        expect(message).toEqual(mockMessage);
    });

    // Failure:
    it('displays an error if the getMessage call fails', async () => {
        const mockError = 'Error retrieving message from database.';

        getMessage.mockRejectedValueOnce({ text: mockError });
        const wrapper = mount(MessageDisplay);

        await flushPromises();
        expect(getMessage).toHaveBeenCalledTimes(1);

        const displayedError = wrapper
            .find('[data-testid="message-error"]')
            .text();
        expect(displayedError).toEqual(mockError);
    });
});
