import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  dob: z.string(),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zip: z.string().min(3),
  country: z.string().min(2),
  level: z.enum(["UG", "PG"]),
  program: z.string().min(2),
  previousEducation: z.string().min(2),
  yearOfPassing: z.string().min(2),
  guardianName: z.string().min(2),
  guardianPhone: z.string().min(7),
  statement: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

const ugPrograms = [
  "B.Tech (CSE)",
  "BBA",
  "BCA",
  "BA (H) Psychology",
  "B.Com (H)",
];

const pgPrograms = ["MBA", "MCA", "M.Sc (Data Science)"];

export default function AdmissionForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { level: "UG", gender: "Male", country: "India" } });

  const level = watch("level");
  const programs = level === "UG" ? ugPrograms : pgPrograms;
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/admissions/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      toast.success("Application submitted successfully");
      setSubmitted(true);
      reset();
    } catch (e: any) {
      toast.error(e.message || "Failed to submit application");
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">Admission Application Form</h1>
      <p className="mt-2 text-muted-foreground">Fill in the details carefully. Our admissions team will contact you shortly.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-6">
        <section className="grid gap-4 rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Full Name" error={errors.fullName?.message}><input {...register("fullName")} className="input" /></Field>
            <Field label="Email" error={errors.email?.message}><input type="email" {...register("email")} className="input" /></Field>
            <Field label="Phone" error={errors.phone?.message}><input {...register("phone")} className="input" /></Field>
            <Field label="Date of Birth" error={errors.dob?.message}><input type="date" {...register("dob")} className="input" /></Field>
            <Field label="Gender" error={errors.gender?.message}>
              <select {...register("gender")} className="input">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </Field>
          </div>
        </section>

        <section className="grid gap-4 rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Contact Details</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Address" error={errors.address?.message} className="md:col-span-2"><input {...register("address")} className="input" /></Field>
            <Field label="City" error={errors.city?.message}><input {...register("city")} className="input" /></Field>
            <Field label="State" error={errors.state?.message}><input {...register("state")} className="input" /></Field>
            <Field label="ZIP/Postal Code" error={errors.zip?.message}><input {...register("zip")} className="input" /></Field>
            <Field label="Country" error={errors.country?.message}><input defaultValue="India" {...register("country")} className="input" /></Field>
          </div>
        </section>

        <section className="grid gap-4 rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Program Details</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Level" error={errors.level?.message}>
              <select {...register("level")} className="input">
                <option value="UG">Undergraduate</option>
                <option value="PG">Postgraduate</option>
              </select>
            </Field>
            <Field label="Program" error={errors.program?.message}>
              <select {...register("program")} className="input">
                {programs.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </Field>
            <Field label="Previous Education" error={errors.previousEducation?.message} className="md:col-span-2"><input {...register("previousEducation")} className="input" placeholder="e.g., 12th CBSE 85% or BCA 8.2 CGPA" /></Field>
            <Field label="Year of Passing" error={errors.yearOfPassing?.message}><input {...register("yearOfPassing")} className="input" /></Field>
          </div>
        </section>

        <section className="grid gap-4 rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Guardian Details</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Guardian Name" error={errors.guardianName?.message}><input {...register("guardianName")} className="input" /></Field>
            <Field label="Guardian Phone" error={errors.guardianPhone?.message}><input {...register("guardianPhone")} className="input" /></Field>
          </div>
        </section>

        <section className="grid gap-4 rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Statement of Purpose</h2>
          <Field label="Why do you want to join Amity University Patna?" error={errors.statement?.message}>
            <textarea rows={6} {...register("statement")} className="input" />
          </Field>
        </section>

        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">By submitting, you agree to our processing your information for admissions.</div>
          <button disabled={isSubmitting} className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50">
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>

        {submitted && (
          <div className="rounded-md border bg-muted/30 p-4 text-sm">Thank you! Your application has been submitted. We will reach out via email/phone.</div>
        )}
      </form>

      <style>{`
        .input { @apply w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2; }
      `}</style>
    </div>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`grid gap-1 ${className || ""}`}>
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
