import { PromptSuggestionButton } from './PromptSuggestionButton';

type PromptSuggestionRowProps = {
  onPromptClick: (prompt: string) => void;
};

export const PromptSuggestionRow = ({ onPromptClick }: PromptSuggestionRowProps) => {
  const prompts = [
    'Create a 7-day workout plan for weight loss',
    'What are some high-protein vegan meals?',
    'How can I improve my running stamina?',
    'Create a workout and nutrition guide for office workers who sit 8+ hours per day.',
  ];
  return (
    <div className="prompt-suggestion-row">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton
          key={index}
          text={prompt}
          onClick={() => onPromptClick(prompt)}
        />
      ))}
    </div>
  );
};