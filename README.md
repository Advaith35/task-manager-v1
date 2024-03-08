# Task Management Application

This is a simple task management application built with React. It allows users to create tasks and move them between "Todo", "In Progress", and "Closed" sections. The tasks are stored in the local storage, so they persist even if the page is refreshed.

## Project Structure

The project consists of the following main files:

- `App.jsx`: This is the main entry point of the application. It imports and uses the `CreateTask` and `ListTasks` components. The `tasks` state is used to store all the tasks, and it's initially set to the tasks stored in local storage. The `DndProvider` component from the `react-dnd` library is used to enable drag and drop functionality. The `Toaster` component from the `react-hot-toast` library is used to display toast notifications.

- `CreateTask.jsx`: This component allows users to create new tasks. The `name` state is used to store the name of the new task. The `handleSubmit` function is called when the form is submitted. It checks if the task name is not empty, creates a new task object, adds the new task to the `tasks` state, clears the task name, and shows a success toast. If the task name is empty, it shows an error toast. The `uuidv4` function from the `uuid` library is used to generate a unique ID for each task.

- `ListTasks.jsx`: This component is responsible for displaying tasks in different sections based on their status. The `useEffect` hook is used to filter tasks based on their status whenever the `tasks` state changes.

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone https://https://github.com/Advaith35/task-manager-v1`
2. Navigate to the project directory: `cd task-manager-v1`
3. Install the dependencies: `npm install`

## Running the Application

To run the application, use the following command:

'''bash
npm start


This will start the application and it will be accessible at `http://localhost:3000`.



## License

This project is licensed under the MIT License.

