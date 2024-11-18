import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ProjectOptions from "@/components/ProjectOptions";
import { Ionicons } from "@expo/vector-icons";
import FilledButton from "@/components/FilledButton";

interface QuestionType {
  id: number;
  question: string;
}

interface QuestionProps {
  item: QuestionType;
  setQuestions: (questions: QuestionType[]) => void;
  questions: QuestionType[];
  getIndex: () => number | undefined;
  drag: () => void;
}

const Question = ({
  item,
  setQuestions,
  questions,
  getIndex,
  drag,
}: QuestionProps) => {
  const [editable, setEditable] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const handleDelete = () => {
    Alert.alert(
      "Delete Question",
      "Are you sure you want to delete this question? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          style: "destructive",
          onPress: () => deleteQuestion(item.id),
        },
      ]
    );
  };

  const deleteQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const editQuestion = (id: number, updatedQuestion: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              question: updatedQuestion,
            }
          : q
      )
    );
  };

  const questionOptions = [
    {
      name: "Edit",
      icon: (
        <Ionicons name="pencil-sharp" size={20} color="white" className="p-4" />
      ),
      onPress: () => setEditable(true),
    },
    {
      name: "Delete",
      icon: (
        <Ionicons
          name="trash-bin-outline"
          size={20}
          color="white"
          className="p-4"
        />
      ),
      onPress: handleDelete,
    },
  ];

  return (
    <TouchableWithoutFeedback
      className={"z-40"}
      onPress={() => setIsOptionsVisible(false)}
      onLongPress={drag}
    >
      <View className="mb-4 w-9/10 p-4 mx-auto bg-applicationGreen rounded-xl">
        {isOptionsVisible && (
          <ProjectOptions
            options={questionOptions}
            setIsVisible={() => setIsOptionsVisible(false)}
          />
        )}
        <TouchableWithoutFeedback
          onLongPress={drag}
          onPress={() => setIsOptionsVisible(false)}
        >
          <View className="mr-2 mb-4 ml-auto flex flex-row">
            <Text className={"pl-4 pt-2 text-3xl text-white text-left flex-1"}>
              Question {(getIndex() as number) + 1}
            </Text>
            <TouchableOpacity
              className={"mt-2"}
              onLongPress={drag}
              onPress={() => setIsOptionsVisible(!isOptionsVisible)}
            >
              <Ionicons name="ellipsis-horizontal" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
        <TextInput
          value={item.question}
          onChangeText={(text) => editQuestion(item.id, text)}
          placeholder="Question"
          className="p-4 mb-3 text-xl h-auto w-full bg-gray-200 rounded-xl"
          editable={editable}
          multiline
          textAlignVertical="top"
        />
        {editable && (
          <FilledButton title="Save" onPress={() => setEditable(false)} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Question;
