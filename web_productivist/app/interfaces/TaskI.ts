export interface TaskI {
  uuid: string;
  id_position: number;
  title: string;
  description: string;
  due_to: string;
  status: string;
  dificulty: string;
  priority: string;
  tags: string[];
  project: string;
  created_at: string;
  finished_at: string;
}
