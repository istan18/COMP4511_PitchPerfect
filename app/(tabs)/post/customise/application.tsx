import FilledButton from "@/components/FilledButton";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Question from "@/components/Question";

const defaultQuestions = [
  {
    id: 1,
    question: "What skills do you have related to this project?",
    maxLength: 300,
  },
  { id: 2, question: "Describe your previous experiences.", maxLength: 300 },
  {
    id: 3,
    question: "Why are you motivated to join this project?",
    maxLength: 300,
  },
];

const Application = () => {
  const [questions, setQuestions] = useState(defaultQuestions);
  const [newQuestion, setNewQuestion] = useState("");
  const [newMaxLength, setNewMaxLength] = useState(300);

  const addQuestion = () => {
    if (!newQuestion.trim()) {
      Alert.alert("Question cannot be empty");
      return;
    }
    const nextId = questions.length
      ? Math.max(...questions.map((q) => q.id)) + 1
      : 1;
    setQuestions([
      ...questions,
      { id: nextId, question: newQuestion, maxLength: newMaxLength },
    ]);
    setNewQuestion("");
    setNewMaxLength(300);
  };

  const deleteQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const renderQuestion = ({
    item,
  }: {
    item: { id: number; question: string; maxLength: number };
  }) => (
    <Question item={item} setQuestions={setQuestions} questions={questions} />
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-background p-4">
        <Text className="text-center text-3xl text-white mb-6">
          Application Questions
        </Text>

        <FlatList
          data={questions}
          renderItem={renderQuestion}
          keyExtractor={(item) => item.id.toString()}
          className="mb-6"
        />

        <View className="mb-6 w-4/5 mx-auto  p-2 bg-applicationGreen  rounded-lg">
          <Text className="font-semibold text-center text-white text-2xl mb-4">
            Add New Question
          </Text>
          <TextInput
            value={newQuestion}
            onChangeText={setNewQuestion}
            placeholder="New Question"
            className="p-2 mb-3 bg-gray-200 rounded-lg"
          />
          <TextInput
            value={String(newMaxLength)}
            onChangeText={(text) => setNewMaxLength(Number(text))}
            placeholder="Max Length"
            keyboardType="number-pad"
            className="p-2 mb-3 bg-gray-200 rounded-lg"
          />
          <FilledButton title="Add Question" onPress={addQuestion} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Application;
