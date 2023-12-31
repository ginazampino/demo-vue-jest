import LoginForm from '@/components/LoginForm.vue';
import { mount } from '@vue/test-utils';

describe('LoginForm', () => {
    it('emits an event with a user data payload', () => {
        const wrapper = mount(LoginForm);
        const input = wrapper.find('input[data-testid="name-input"]');

        input.setValue('First Last');
        wrapper.trigger('submit');

        const formSubmittedCalls = wrapper.emitted('formSubmitted');

        expect(formSubmittedCalls).toHaveLength(1);

        const expectedPayload = { name: 'First Last' };

        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
            expectedPayload
        );
    });
});
