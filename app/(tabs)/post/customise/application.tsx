import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FilledButton from "@/components/FilledButton";
import Question from "@/components/Question";
import BackButton from "@/components/BackButton";
import DraggableFlatList from "react-native-draggable-flatlist";
import ApplicationPopup from "@/components/ApplicationPopUp";

const defaultQuestions = [
  {
    id: 1,
    question: "What skills do you have related to this project?",
  },
  { id: 2, question: "Describe your previous experiences." },
  {
    id: 3,
    question: "Why are you motivated to join this project?",
  },
];

const Application = () => {
  const [questions, setQuestions] = useState(defaultQuestions);
  const [newQuestion, setNewQuestion] = useState("");
  const [showHint, setShowHint] = useState(true);

  const hideHint = () => {
    setShowHint(false);
  };

  const [popupVisible, setPopupVisible] = useState(false);

  const addQuestion = () => {
    if (!newQuestion.trim()) {
      Alert.alert("Question cannot be empty");
      return;
    }
    const nextId = questions.length
      ? Math.max(...questions.map((q) => q.id)) + 1
      : 1;
    setQuestions([...questions, { id: nextId, question: newQuestion }]);
    setNewQuestion("");
    setPopupVisible(false);
  };

  const renderQuestion = ({
    item,
    getIndex,
    drag,
    isActive,
  }: {
    item: { id: number; question: string };
    getIndex: () => number | undefined;
    drag: () => void;
    isActive: boolean;
  }) => (
    <TouchableWithoutFeedback
      className="p-4"
      disabled={isActive}
      onLongPress={() => {
        hideHint();
        drag();
      }}
    >
      <Question
        item={item}
        drag={drag}
        getIndex={getIndex}
        setQuestions={setQuestions}
        questions={questions}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <BackButton />
      <Text className="text-center mt-20 text-4xl text-white mb-10">
        Application Questions
      </Text>
      <DraggableFlatList
        data={questions}
        onDragEnd={({ data }) => setQuestions(data)}
        renderItem={renderQuestion}
        keyExtractor={(item) => item.id.toString()}
      />
      {showHint && (
        <Text className="text-gray-400 mb-4 text-md text-center">
          Hold any question card to rearrange question order
        </Text>
      )}
      {popupVisible ? (
        <ApplicationPopup
          visible={popupVisible}
          addQuestion={addQuestion}
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
          onClose={() => setPopupVisible(false)}
        />
      ) : null}
      <View
        className={
          "absolute bottom-12 left-12 bg-black w-4/5 mx-auto rounded-2xl"
        }
      >
        <FilledButton
          otherStyles="w-3/4"
          title="Add Question"
          onPress={() => setPopupVisible(true)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Application;
