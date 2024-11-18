import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ProjectOptions from "@/components/ProjectOptions";
import { Ionicons } from "@expo/vector-icons";

interface QuestionType {
  id: number;
  question: string;
  maxLength: number;
}

interface QuestionProps {
  item: QuestionType;
  setQuestions: (questions: QuestionType[]) => void;
  questions: QuestionType[];
}

const questionOptions = [
  {
    name: "Collaborate",
    icon: (
      <Ionicons name="people-outline" size={20} color="white" className="p-4" />
    ),
  },
];

const Question = ({ item, setQuestions, questions }: QuestionProps) => {
  const [editable, setEditable] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const editQuestion = (
    id: number,
    updatedQuestion: string,
    updatedMaxLength: number
  ) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              question: updatedQuestion,
              maxLength: updatedMaxLength,
            }
          : q
      )
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => setIsOptionsVisible(!isOptionsVisible)}
    >
      <View className="mb-4 w-4/5 p-2 mx-auto bg-applicationGreen rounded-xl">
        {isOptionsVisible && (
          <ProjectOptions
            options={questionOptions}
            setIsVisible={() => setIsOptionsVisible(!isOptionsVisible)}
          />
        )}
        <TouchableOpacity
          className="mr-4 ml-auto"
          onPress={() => setIsOptionsVisible(!isOptionsVisible)}
        >
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
        </TouchableOpacity>
        <TextInput
          value={item.question}
          onChangeText={(text) => editQuestion(item.id, text, item.maxLength)}
          placeholder="Question"
          className="p-2 mb-3 bg-gray-200 rounded-xl"
          editable={editable}
        />
        <TextInput
          value={String(item.maxLength)}
          onChangeText={(text) =>
            editQuestion(item.id, item.question, Number(text))
          }
          placeholder="Max Length"
          keyboardType="number-pad"
          className="p-2 mb-3 bg-gray-200 rounded-xl"
          editable={editable}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Question;
