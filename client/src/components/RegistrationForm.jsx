import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const RegistrationForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 " >
      <div>
        <label className="block text-sm font-medium mb-1">First Name<span className="text-red-500">*</span></label>
        <Input className="border px-4 py-3 rounded h-12" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Last Name<span className="text-red-500">*</span></label>
        <Input className="border px-4 py-3 rounded h-12" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Country of Residence<span className="text-red-500">*</span>
        </label>
        <Select>
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="India">India</SelectItem>
            <SelectItem value="UAE">UAE</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Region<span className="text-red-500">*</span></label>
        <Select>
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="South">South</SelectItem>
            <SelectItem value="North">North</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email Address<span className="text-red-500">*</span></label>
        <Input className="border px-4 py-3 rounded h-12" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Confirm Email Address<span className="text-red-500">*</span>
        </label>
        {/* <Input className="border p-2 rounded" /> */}
        <Input className="border px-4 py-3 rounded h-12" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Nationality<span className="text-red-500">*</span></label>
        <Select>
          {/* <SelectTrigger className="w-full border px-4 py-3 rounded h-12"> */}
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select nationality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Indian">Indian</SelectItem>
            <SelectItem value="Emirati">Emirati</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Mobile Number<span className="text-red-500">*</span></label>
        <div className="flex gap-2">
          <Select>
            {/* <SelectTrigger className="w-24 border px-4 py-3 rounded h-12"> */}
            <SelectTrigger className="w-34 min-h-[48px] px-4 py-2 border rounded">
              <SelectValue placeholder="+91" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+91">+91</SelectItem>
              <SelectItem value="+971">+971</SelectItem>
            </SelectContent>
          </Select>
          <Input className="border px-4 py-3 rounded h-12" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Company Name<span className="text-red-500">*</span></label>
        <Input className="border px-4 py-3 rounded h-12" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Job Title<span className="text-red-500">*</span></label>
        <Input className="border px-4 py-3 rounded h-12" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Company Type<span className="text-red-500">*</span></label>
        <Select>
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Private">Private</SelectItem>
            <SelectItem value="Government">Government</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Industry<span className="text-red-500">*</span></label>
        <Select>
          <SelectTrigger className="w-full min-h-[48px] px-4 py-2 border rounded">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="IT">IT</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default RegistrationForm;
