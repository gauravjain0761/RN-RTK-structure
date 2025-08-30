import ToastComponent from '@/components/Toast/ToastComponent';

const ToastConfig = (lineAnim: any) => ({
  success: ({text1}: any) => (
    <ToastComponent type="success" text1={text1} lineAnim={lineAnim} />
  ),
  error: ({text1}: any) => (
    <ToastComponent type="error" text1={text1} lineAnim={lineAnim} />
  ),
});

export default ToastConfig;
