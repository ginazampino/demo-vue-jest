import MessageContainer from '@/components/MessageContainer.vue';
import { mount } from '@vue/test-utils';

describe('MessageContainer', () => {
    it('wraps the MessageDisplay component', () => {
        const wrapper = mount(MessageContainer, {
            global: {
                stubs: {
                    MessageDisplay: {
                        template:
                            '<p data-testid="message">Hello from the db</p>',
                    },
                },
            },
        });

        const message = wrapper.find('[data-testid="message"]').text();
        expect(message).toEqual('Hello from the db');
    });
});
