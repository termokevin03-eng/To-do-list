import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (input.trim() === "") {
      return;
    }

    setTasks([...tasks, input.trim()]);
    setInput("");
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.smallTitle}>MY PERSONAL</Text>
        <Text style={styles.title}>TASK</Text>
        <Text style={styles.subtitle}>
          Stay focused. Get it done.
        </Text>
      </View>

      {/* Input */}
      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task..."
          placeholderTextColor="#777"
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addTask}
        >
          <Text style={styles.addButtonText}>ADD TASK</Text>
        </TouchableOpacity>
      </View>

      {/* Section title */}
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>YOUR TASKS</Text>
        <Text style={styles.taskCount}>
          {tasks.length} {tasks.length === 1 ? "TASK" : "TASKS"}
        </Text>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>

            <View style={styles.numberBox}>
              <Text style={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </Text>
            </View>

            <Text style={styles.taskText}>{item}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTask(index)}
            >
              <Text style={styles.deleteText}>×</Text>
            </TouchableOpacity>

          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>—</Text>
            <Text style={styles.emptyTitle}>NO TASKS</Text>
            <Text style={styles.emptyText}>
              Add something you need to get done.
            </Text>
          </View>
        }
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          DISCIPLINE • GRIND • FOCUS
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111315",
    paddingHorizontal: 22,
    paddingTop: 60,
  },

  // Header
  header: {
    marginBottom: 30,
  },

  smallTitle: {
    color: "#4d8dff",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 3,
    marginBottom: 5,
  },

  title: {
    color: "#f2f2f2",
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 1,
  },

  subtitle: {
    color: "#777",
    fontSize: 14,
    marginTop: 5,
  },

  // Input
  inputSection: {
    marginBottom: 28,
  },

  input: {
    backgroundColor: "#1b1e21",
    borderWidth: 1,
    borderColor: "#303438",
    borderRadius: 8,
    padding: 16,
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: "#2864d7",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },

  addButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },

  // List header
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#292d30",
    paddingBottom: 8,
    marginBottom: 8,
  },

  listTitle: {
    color: "#ddd",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  taskCount: {
    color: "#666",
    fontSize: 8,
    fontWeight: "700",
  },

  // Task
  taskContainer: {
    backgroundColor: "#1a1d20",
    borderWidth: 1,
    borderColor: "#292d30",
    borderRadius: 8,
    padding: 13,
    marginBottom: 9,
    flexDirection: "row",
    alignItems: "center",
  },

  numberBox: {
    width: 38,
    height: 38,
    backgroundColor: "#24282c",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  number: {
    color: "#4d8dff",
    fontSize: 8,
    fontWeight: "900",
  },

  taskText: {
    color: "#eee",
    fontSize: 12,
    fontWeight: "600",
    flex: 1,
  },

  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 6,
    backgroundColor: "#292d30",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  deleteText: {
    color: "#888",
    fontSize: 24,
    fontWeight: "300",
    lineHeight: 25,
  },

  // Empty state
  emptyContainer: {
    alignItems: "center",
    marginTop: 50,
  },

  emptyIcon: {
    color: "#2864d7",
    fontSize: 30,
    fontWeight: "900",
  },

  emptyTitle: {
    color: "#ddd",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 2,
    marginTop: 8,
  },

  emptyText: {
    color: "#666",
    fontSize: 13,
    marginTop: 6,
  },

  // Footer
  footer: {
    paddingVertical: 18,
    alignItems: "center",
  },

  footerText: {
    color: "#444",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 2,
  },
});
