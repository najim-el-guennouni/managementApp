import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {  PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link } from '@inertiajs/react';


export default function Index({ auth, projects }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Projects
        </h2>
      }
    >
                  <Head title="Projects" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              {/* <pre>{JSON.stringify(projects,undefined,2)}</pre> */}
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2">ID</th>
                    <th className="px-3 py-2">Image</th>
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2 ">Create Date</th>
                    <th className="px-3 py-2 ">Due Date</th>
                    <th className="px-3 py-2">Created By</th>
                    <th className="px-3 py-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map((project)=> (
                      <tr className="bg-white boreder-b dark:bg-gray-800 dark:border-gray-700" key={project.id}>
                    <td className="px-3 py-2">{project.id}</td>
                    <td className="px-3 py-2">
                      <img src={project.image_path} alt="Image" style={{width:60}} /> </td>
                    <td className="px-3 py-3">{project.name}</td>
                    <td className="px-3 py-3">
                      <span className={"px-2 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status] }>
                      {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>

                      </td>
                    <td className="px-3 py-3 text-nowrap">{project.created_at}</td>
                    <td className="px-3 py-3 text-nowrap">{project.due_date}</td>
                    <td className="px-3 py-3">{project.createdBy.name}</td>
                    <td className="px-3 py-3">
                      <Link href={route('project.edit',project.id)} className="font-medium text-blue-600 dark:text-blue-500 hover-underline mz-1"> Edit </Link>
                      <Link href={route('project.destroy',project.id)} className="font-medium text-red-600 dark:text-red-500 hover-underline mz-1"> Delete </Link>
                    </td>
                  </tr>
                  ))}

                </tbody>
              </table>
              <Pagination links={projects.meta.links}/>

              </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
