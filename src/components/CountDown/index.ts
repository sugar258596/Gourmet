import { withInstall } from '@/utils';
import countButton from './src/CountButton.vue';
import countdownInput from './src/CountdownInput.vue';

export { default as CountCode } from './src/CountCode.vue';
export { default as ImgeCode } from './src/ImgeCode.vue';

export const CountdownInput = withInstall(countdownInput);
export const CountButton = withInstall(countButton);
