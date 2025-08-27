"use client";

import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

type User = {
  id: number;
  name: string;
  email: string;
  salary: number;
};

const columns: TableColumn<User>[] = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Salary",
    selector: (row) => Number(row.salary).toLocaleString("en-US") +' THB',
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <div className="flex justify-center gap-2">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              Edit
          </button>&nbsp;
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              Delete
          </button>
      </div>
    )
  }
];

const MyDataTable = ({ data }: { data: User[] }) => {
  const [ismodaladdOpen, setIsmodaladdOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const perPage = 5;

  // Simulate loading (เช่น เรียก API จริงก็ใช้ useEffect)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 วินาที

    return () => clearTimeout(timer);
  }, []);
  
  // Filter data จาก search
  const filteredData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const totalPages = Math.ceil(filteredData.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentData = filteredData.slice(startIndex, startIndex + perPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // ถ้าเปลี่ยนคำค้น ให้กลับไปหน้าแรก
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFormaddSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const timer = setTimeout(() => {
      setLoading(false);
      setIsmodaladdOpen(false);
    }, 5000);
  }
  
  return (
    <div>
      {loading ? (
        <div className="loader-container">
            <div className="loader">
            <svg viewBox="0 0 80 80">
                <circle r="32" cy="40" cx="40" id="test"></circle>
            </svg>
            </div>

            <div className="loader triangle">
            <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
            </svg>
            </div>

            <div className="loader">
            <svg viewBox="0 0 80 80">
                <rect height="64" width="64" y="8" x="8"></rect>
            </svg>
            </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
          {/* ปุ่มฝั่งซ้าย */}
          <button type="button"
              onClick={() => {
                setIsmodaladdOpen(true)
              }} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow flex items-center gap-1">
            <svg
              className="w-6 h-6 text-gray-800 dark:gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m2.665 9H6.647A1.647 1.647 0 0 1 5 15.353v-1.706A1.647 1.647 0 0 1 6.647 12h1.018M16 12l1.443 4.773L19 12m-6.057-.152-.943-.02a1.34 1.34 0 0 0-1.359 1.22 1.32 1.32 0 0 0 1.172 1.421l.536.059a1.273 1.273 0 0 1 1.226 1.718c-.2.571-.636.754-1.337.754h-1.13"
              />
            </svg>
            Upload file .xlsx
          </button>

          {/* ช่องค้นหาฝั่งขวา */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search name or email..."
            className="border px-3 py-1 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
          

          <DataTable columns={columns} data={currentData} pagination={false} />

          <div className="flex justify-center mt-4 space-x-1 flex-wrap">
            {/* Prev button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal border rounded transition duration-200 ease
                ${currentPage === 1
                  ? "text-slate-300 bg-gray-100 border-slate-200 cursor-not-allowed"
                  : "text-slate-500 bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-400"}`}
            >
              Prev
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal border rounded transition duration-200 ease
                  ${page === currentPage
                    ? "text-white bg-slate-800 border-slate-800 hover:bg-slate-700 hover:border-slate-700"
                    : "text-slate-500 bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-400"}`}
              >
                {page}
              </button>
            ))}

            {/* Next button */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal border rounded transition duration-200 ease
                ${currentPage === totalPages
                  ? "text-slate-300 bg-gray-100 border-slate-200 cursor-not-allowed"
                  : "text-slate-500 bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-400"}`}
            >
              Next
            </button>
          </div>
        </>
        
      )}

      {ismodaladdOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-brightness-90 bg-white/30">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-bold text-gray-900">Upload file xlsx</h3>
              <button
                onClick={() => setIsmodaladdOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleFormaddSubmit}>
            <div className="py-4 text-gray-700">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                </div>
              </label>
              <input
                id="dropzone-file"
                type="file"
                multiple
                className="hidden"
              />
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t">
              <button
                onClick={() => setIsmodaladdOpen(false)}
                className="flex items-center gap-x-1 px-4 py-2 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
              Close
              </button>
              <button disabled={loading} className="flex items-center gap-x-1 px-4 py-2 text-sm rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 text-gray-600 dark:gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M11 16h2m6.707-9.293-2.414-2.414A1 1 0 0 0 16.586 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414a1 1 0 0 0-.293-.707ZM16 20v-6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6h8ZM9 4h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4Z"/>
                    </svg>

                    Save
                  </>
                )}
              </button>
            </div>
            </form>
          </div>
        </div>
      )}
    </div>  
  );
};

export default MyDataTable;
