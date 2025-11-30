"use client"

import { ShieldCheck, Clock, Users, Award } from "lucide-react"

export default function TrustSignals() {
    return (
        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                <div>
                    <h4 className="text-white font-bold text-sm">Google Partner</h4>
                    <p className="text-xs text-gray-400 mt-1">Certified Experts</p>
                </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Clock className="w-6 h-6 text-accent shrink-0" />
                <div>
                    <h4 className="text-white font-bold text-sm">2-Hour Response</h4>
                    <p className="text-xs text-gray-400 mt-1">Guaranteed</p>
                </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Users className="w-6 h-6 text-accent shrink-0" />
                <div>
                    <h4 className="text-white font-bold text-sm">200+ Projects</h4>
                    <p className="text-xs text-gray-400 mt-1">Delivered Successfully</p>
                </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Award className="w-6 h-6 text-accent shrink-0" />
                <div>
                    <h4 className="text-white font-bold text-sm">98% Satisfaction</h4>
                    <p className="text-xs text-gray-400 mt-1">5-Star Rated</p>
                </div>
            </div>
        </div>
    )
}
