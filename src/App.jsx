import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DisplayData from './components/reactquery/DisplayData';

export default function App() {
  const queryClient = new QueryClient();
  console.log('Rendered');

  return (
    <QueryClientProvider client={queryClient}>
      <DisplayData />
    </QueryClientProvider>
  )
}
